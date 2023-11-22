const app = async ()=>{
    var url = 'https://api.thenewsapi.com/v1/news/top?api_token=FoVHf5Gfylp3chd5a9zNw4MYpvX0jQxw95pG34Cs&locale=us&limit=3';
          var req = new Request(url);
    

    try {
        const response = await fetch(req);
        const result = await response.text();
        document.querySelector('.card-title').innerHTML=result[0].title;
          document.querySelector('.btn.btn-primary').href=result[0].url;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
app()

//FoVHf5Gfylp3chd5a9zNw4MYpvX0jQxw95pG34Cs