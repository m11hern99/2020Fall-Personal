
const posts= { 
    post: [
        {
            url: 'https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png',
            message: '1',
            owner: {
                name: 'John Smith',
                handle: 'johnsmith',
                profile: 'https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png'
            },
        },
        
    ],
    deletePost(i,x){
        this.post.splice(i,1);
    },
    addPost(){
        this.post.push( );
    },
    editPost(){

    }
};
export default posts;