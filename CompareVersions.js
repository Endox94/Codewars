function compareVersions (version1, version2) {
  
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  
  for (let i = 0; i < v1.length; i++){
    if (Number(v1[i]) < Number(v2[i])){
      return false;
    } else if (Number(v1[i]) > Number(v2[i])){
      return true;
    }
  }
  
  return v1.length >= v2.length;
}