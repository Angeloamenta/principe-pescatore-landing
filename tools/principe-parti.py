# Divide il Principe a T in corpo + due braccia e crea le mappe di profondità per galleon.js.
# Uso, dalla cartella del progetto:  python3 tools/principe-parti.py  (servono pillow, numpy, scipy)
# Se cambiano i numeri stampati, aggiornare FIGURE_PARTS in src/effects/galleon.js.
from PIL import Image
import numpy as np, json
from scipy import ndimage as nd
SRC='assets/img/principe-posa-t.png'  # illustrazione a figura intera, braccia a T
S=0.5
im=Image.open(SRC).convert('RGBA'); im=im.resize((round(im.width*S),round(im.height*S)),Image.LANCZOS)
a=np.array(im); al=a[...,3]>40
H,W=al.shape
yy,xx=np.mgrid[0:H,0:W]
r,g,b=[a[...,i].astype(int) for i in range(3)]
rope=(r>b+25)&(r>90)&(xx>448*S)&(xx<570*S)&(yy<330*S)     # corda sulla spalla sinistra (colore caldo)
band=(yy<400*S)
armL=al&(xx<455*S)&band&~rope
armR=al&(xx>708*S)&band
body=al&~armL&~armR
# spalle arrotondate: niente spigoli dove c'era l'attacco del braccio a T
def round_corner(cx,cy,R,left):
    side=(xx<cx) if left else (xx>cx)
    d=np.sqrt((xx-cx)**2+(yy-cy)**2)
    return side&(yy<cy)&(yy>222*S)&(d>R)
cut=round_corner(500*S,288*S,48*S,True)|round_corner(663*S,288*S,48*S,False)
body&=~(cut&~rope)
def depth(mask, gamma=0.5, smooth=1.2):
    d=nd.distance_transform_edt(nd.binary_fill_holes(nd.binary_closing(mask,iterations=2)))
    z=(d/d.max())**gamma
    return nd.gaussian_filter(z,smooth)*mask
zb=depth(body)
rr=np.sqrt((xx-585*S)**2+((yy-105*S)*0.95)**2); R=78*S
zb=zb+np.where(rr<R,0.45*np.sqrt(np.clip(1-(rr/R)**2,0,1)),0)*body
zb=nd.gaussian_filter(zb,1.0)*body; zb/=zb.max()
za=depth(armL|armR,0.55)
out={}
def save(name,mask,z,pivot):
    ys,xs=np.where(mask); x0,x1,y0,y1=xs.min(),xs.max()+1,ys.min(),ys.max()+1
    rgba=a.copy(); rgba[...,3]=np.where(mask,a[...,3],0)
    Image.fromarray(rgba[y0:y1,x0:x1]).save(f'assets/img/principe-{name}.webp',quality=92,method=6)
    Image.fromarray((np.clip(z,0,1)*255).astype(np.uint8)[y0:y1,x0:x1]).save(f'assets/img/principe-{name}-rilievo.png',optimize=True)
    out[name]={'w':int(x1-x0),'h':int(y1-y0),'x0':int(x0),'y0':int(y0),'pivot':[round(float(pivot[0]-x0),1),round(float(pivot[1]-y0),1)]}
ys,xs=np.where(body)
save('corpo',body,zb,(585*S, ys.max()+1))
save('braccio-sx',armL,za,(480*S,270*S))
save('braccio-dx',armR,za,(685*S,270*S))
print(json.dumps(out))
json.dump(out,open('tools/principe-parti.json','w'))
