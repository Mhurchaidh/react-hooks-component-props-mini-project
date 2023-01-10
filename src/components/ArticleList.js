import Article from "./Article";

function ArticleList({posts}){
    const articles = posts.map(article => {
        const {id, title, date, preview} = article;
        return <Article key={id} title={title} date={date} preview={preview}/>
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;