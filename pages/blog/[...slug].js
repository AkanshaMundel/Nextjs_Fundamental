import { useRouter } from "next/router";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
function BlogPostsPage(){
    const router = useRouter;
    console.log(router.query);

    return (
        <div>
            <h2>This is slug blog post</h2>
        </div>
    )

}
export default BlogPostsPage;

//call by http://localhost:3000/blog/slug/2010
//catch  way to get alot of path in one go or to get dynamic segmet in one go 