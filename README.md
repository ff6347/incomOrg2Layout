#incom.org to layout  
this is the source code for importing data generated from incom.org into indesign. 
## Getting Started 
1. **The incom.org API is still in alpha phase. so i can't gibe the keys away yet.** If you are a student at the FHP talk to the Incom-Admins how to get your hands on that data. Than you can connect me and i show you how to get your data to work.  
If you still want to try out some of the scripts you can download the files i've used to build my documentation.  
Get them over [here](http://fabiantheblind.info/downloads/incomOrg2Layout.zip)  

2. look into the folder "latest" there is all that matters. 
 
3. **First of all use the script:** "START_HERE_inspect_meta.jsx""  
It has the basic components of all scripts.  
**You need to use the ExtendScript Toolkit from Adobe to see the output.**   
Run the "allIncomProjects.jsx" and afterwards the "connect_projects.jsx" or have a look into "getDataFromJSON_v01.jsx" to get started.
Maybe you run the file "rectangle_images.jsx".   

##The Runnable Scripts 
START_HERE_inspect_meta.jsx    
allIncomProjects.jsx  
- connect_projects.jsx -> depends on allIncomProjects.jsx  book.jsx  
- book_build_index.jsx -> depends on book.jsx  circle_images.jsx  circle_text.jsx  
index_allProjects.jsx    rectangle_images.jsx    getDataFromJSON_v01.jsx    

##The Utility files without own execution:
colors.jsx // builds the colors  db_utils.jsx  // utilities to get data from the db.jsondb.json  // this holds all the data from incomdocument.jsx  // builds up a documentstyles.jsx  // build paragraph and character stylesutility.jsx  // some stuff like sorting by dataweblinks.jsx  // this builds weblinks from text very useful

##License
All content is under GPLv3 License 