hput () {
  eval hash"$1"='$2'
}

hget () {
  eval echo '${hash'"$1"'#hash}'
}
hput js javascript
hput html html
hput css css

directory=$@
if [ -z "$directory" ]
then
	directory="."
fi

filetypes="$directory/*.css
$directory/*.html
$directory/*.js"

for file in $filetypes
do
	filename=`basename "$file"` 
	ext=`hget ${filename##*.}`
	rev=`curl -sX GET 'http://charmgr.cloudant.com/cm-dev/hrothgar' | jsawk 'return this._rev'`
	echo File              : $file
	echo Current revision  : $rev
	echo Uploading document: $filename
	echo "${ext}"
	echo curl              : curl -X PUT http://charmgr.cloudant.com/cm-dev/hrothgar/$filename?rev=$rev --data-binary @$file -H 'Content-Type: text/'$ext
	
	curl -X PUT https://charmgr:anyacate@charmgr.cloudant.com/cm-dev/hrothgar/$filename?rev=$rev --data-binary @$file -H 'Content-Type: text/'$ext
	echo --------------------------------------------
	echo
done

