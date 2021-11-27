import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div>
            <h1>Blog</h1>
            <input
                className="form-control mb-2"
                type="text"
                value={searchParams.get("filter") || ""}
                onChange={handleChange}
            />
            {data
                .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((item) => (
                    <h4 key={item.id}>
                        <Link to={`/blog/${item.id}`}>
                            {item.id} - {item.title}
                        </Link>
                    </h4>
                ))}
        </div>
    );
};

export default Blog;
