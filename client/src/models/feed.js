import session from '@/models/session'
const posts= { 
    item: [
        {
            url: 'https://cnet4.cbsistatic.com/img/nMzkaCU4zznHp8tlIPyQd8aQOZ4=/940x0/2019/12/18/98fd63aa-d21b-49db-b0d9-570be082efed/wellness-stock-16.jpg',
            message: 'Starting the day off with some stretching!',
            exercise: 'No exercise update.',
            location: 'No location update.',
            time: ( new Date().getMonth()+1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " @ "  
            + new Date().getHours() + ":"  
            + new Date().getMinutes()+ ":" + new Date().getSeconds(),
            owner: {
                name: 'Ygnacia Martina',
                handle: 'ygna31',
                profile: 'https://ak.picdn.net/shutterstock/videos/33810274/thumb/1.jpg'
            },
        },
        {
            url: 'https://phoeberosetta.files.wordpress.com/2012/12/are-black-women-justified-in-avoiding-exercise-due-to-hair-issues2.jpg',
            message: 'Working with dumbbells today',
            exercise: 'Lifting',
            location: 'Home',
            time: ( new Date().getMonth()+1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " @ "  
            + new Date().getHours() + ":"  
            + new Date().getMinutes()+ ":" + new Date().getSeconds(),
            owner: {
                name: 'Anaura Cuzman',
                handle: 'ana19',
                profile: 'https://bloximages.chicago2.vip.townnews.com/ttownmedia.com/content/tncms/assets/v3/editorial/a/1b/a1bd7ebc-b195-11ea-8fdc-639debdc9af5/5eebb95c4c91a.image.jpg'
            },
        },
        
    ],

    deleteItem(i){
        this.item.splice(i,1);
    },
    addItem(text, exc,url,loc){ 
        var x = text;
        var z = exc; 
        var t = loc;
        var y; //will be used for image url, how to upload? 
        if( z == "empty"){
            z = "No exercise update.";
        }
        if( t == "empty"){
            t = "No location update.";
        }
        this.item.unshift({
            url : 'https://static.scientificamerican.com/sciam/cache/file/D842F65B-7883-4130-B48F397EFB4B1D8C_source.jpg?w=590&h=800&41C22102-27DE-4E35-BCF4BE11A87917C4',
            message : x,
            exercise: z,
            location: t,
            time: (new Date().getMonth()+1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " @ "  
            + new Date().getHours() + ":"  
            + new Date().getMinutes() + ":" + new Date().getSeconds(),
            owner : {
                name : session.user.name,
                handle : session.user.handle,
                profile : session.user.profile,
        }});
    },
    editItem(i,mes,ex,loc){
        this.item[i].message = mes;
        this.item[i].exercise = ex;
        this.item[i].location = loc;
        this.item[i].time = "Edited on: " + (new Date().getMonth()+1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " @ "  
        + new Date().getHours() + ":"  
        + new Date().getMinutes() + ":" + new Date().getSeconds();
      },
};
export default posts;
