
function fileNameWrite (urln) {
    let fileName = urln.split("/");
    let file_name_to_write = "NULL";
    if (fileName.length>4) {
        file_name_to_write = fileName[3] + fileName[4] + fileName[5];
      }
    else { file_name_to_write = fileName[3] + fileName[4]; }

}

module.exports = {fileNameWrite};