use("crud-db")
console.log(db); 
db.createCollection("course2")
db.course2.insertOne({
    name: "MongoDB Basics",
    description: "Learn the basics of MongoDB",
    duration: 5
});

db.course2.insertMany([
    {
        name: "MongoDB Advanced",
        description: "Deep dive into MongoDB",
        duration: 10
    },
    {
        name: "MongoDB Performance Tuning",
        description: "Optimize your MongoDB queries",
        duration: 7
    }
]); 


let a=db.course2.find({    duration:5})
console.log(a);