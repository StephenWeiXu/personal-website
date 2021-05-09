import os
import glob

target_dir = './images/family/1990s/'
files = glob.glob(os.path.join(target_dir, '*'))

index = 0
for filepath in files:
    new_filepath = os.path.join(target_dir, str(index) + '.jpg')
    os.rename(filepath, new_filepath)
    index += 1
