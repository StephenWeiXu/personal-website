echo "npm build latest assets files..."
npm run build

echo "Copy file to umich server..."
scp -r build/* weixu@login.itd.umich.edu:/afs/umich.edu/user/w/e/weixu/Public/html/

echo "Copy done..."
echo "Check out the site at http://www-personal.umich.edu/~weixu/index.html"
