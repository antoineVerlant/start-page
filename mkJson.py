import os, json
#fill here
WALLPAPERDIR = ""
#fill here and here
JSONPATHOUTPUT = ".json"

l = []

files = os.listdir(WALLPAPERDIR)
files = filter(lambda f: f.split('.')[-1].lower() in ["jpg","png","gif"], files)
for f in files:
	f = WALLPAPERDIR + f
	if not os.path.isdir(f):
		l.append(f)

jsonFile = open(JSONPATHOUTPUT,'w')
json.dump(l,jsonFile,indent=4)
