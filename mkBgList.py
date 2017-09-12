import os, json

# Fill path here, absolute or relative.
# NO BACKSLASH and end with slash
WALLPAPERDIR = "pictures/Wall/"
JSONPATHOUTPUT = "BGlist.json"

l = []

files = os.listdir(WALLPAPERDIR)
files = filter(lambda f: f.split('.')[-1].lower() in ["jpg","png","gif"], files)
for f in files:
        f = WALLPAPERDIR+f
        if not os.path.isdir(f):
                l.append(os.path.abspath(f))
jsonFile = open(JSONPATHOUTPUT,'w')
json.dump(l,jsonFile,indent=4)
