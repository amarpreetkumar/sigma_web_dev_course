import path from "path"
// console.log(path)

let mypath="D:\sigma_web_dev\sigma_web_dev_course\vid87_workingwithfiles\output.txt"
console.log(path.extname(mypath))

//op:.txt type opf file
console.log(path.basename(mypath))
console.log(path.dirname(mypath))

//join
console.log(path.join("D:\\sigma_web_dev", "sigma_web_dev_course", "vid87_workingwithfiles", "output.txt"))




