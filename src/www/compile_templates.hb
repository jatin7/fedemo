# Make sure you run npm install in trunk/src directory and 'npm install -g stylus nib'
if [ -f ../node_modules/grunt-cli/bin/grunt ]; then
    ../node_modules/grunt-cli/bin/grunt hb 
else 
    echo "Grunt not found, not compiling templates"
fi

CSS=`readlink -f css/virtualmachine.css`
if [ -z $CSS ]; then
    # Script not run from linked directory
    CSS="css/virtualmachine.css"
fi
stylus -I "/usr/local/lib/node_modules" < css/virtualmachine.styl > $CSS
