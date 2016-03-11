for file in ./*.js; do
	echo -e "\n\n\n$file"
	js2coffee $file > coffee/`basename $file .js`.coffee
done
