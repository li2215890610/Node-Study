
exports.getMime = (extName)=>{
  switch (extName) {
    case '.css':
    
      return 'css'
    case '.js':
    
      return 'javascript' 
    case '.json':
    
      return 'json' 
      
    default:
      return 'html'
  }
}