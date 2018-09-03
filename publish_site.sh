echo "npm build latest assets files..."
npm run build

echo "Copy file to umich server..."
aws s3 sync build/ s3://stephenweixu.com/ --recursive

echo "Copy done..."
echo "Check out the site at http://stephenweixu.com"
