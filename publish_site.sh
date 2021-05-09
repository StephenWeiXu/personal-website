echo "npm build latest assets files..."
npm run build

echo "Copy file to s3..."
aws s3 sync build/ s3://stephenweixu.com/ #--exclude "build/images/family/*"

echo "Copy done..."
echo "Check out the site at http://stephenweixu.com"
