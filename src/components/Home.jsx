import React, { useEffect, useState } from "react";
import CardPlaceholder from "./CardPlaceholder";
import VideoPlaceholder from "./VideoPlaceholder";
import AIChat from "./AIChat";
import { fetchProducts, fetchPosts } from "../services/api";

export default function Home() {
  const [content, setContent] = useState({ cards: [], banner: {} });
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites") || "[]"));

  useEffect(() => {
    import("../data/content.json").then((mod) => setContent(mod));
    fetchProducts().then(setProducts).catch(() => {});
    fetchPosts().then(setPosts).catch(() => {});
    const onStorage = () => setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addFav = (item) => {
    const list = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!list.find((i) => i.id === item.id)) {
      list.push(item);
      localStorage.setItem("favorites", JSON.stringify(list));
      setFavorites(list);
      alert("Added to favorites");
    } else {
      alert("Already favorite");
    }
  };

  const filtered = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <header>
        <div className="logo">
          <img src="/crimelogo.png" alt="Crime Portal Logo" />
        </div>
        <h1>Crime Reporting Portal</h1>
      </header>

      <section className="banner">
        <h2>{content.banner?.title || "Together for a Safer Community"}</h2>
        <p>{content.banner?.subtitle || "Report crime, protect lives, and create awareness."}</p>
      </section>

      <main>
        <div className="welcome-text">
          <h2>Welcome to the Crime Reporting Portal</h2>
          <p>Your voice matters. Help make our community safer by reporting suspicious or criminal activities.</p>
        </div>

        <div className="card-container" aria-hidden>
          {content.cards.map((c) => (
            <CardPlaceholder key={c.id} {...c} onFav={addFav} />
          ))}
        </div>

        <section className="mt-6 w-full">
          <h3 className="text-xl font-bold">Live products (DummyJSON)</h3>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." className="border p-2 rounded w-full max-w-md my-2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded shadow">
                <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover rounded" />
                <h4 className="font-bold mt-2">{p.title}</h4>
                <p className="text-sm">{p.brand} · ${p.price}</p>
                <button onClick={() => addFav({ id: p.id, title: p.title, img: p.thumbnail })} className="mt-2 bg-red-600 text-white px-3 py-1 rounded">Favorite</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-bold">News & Posts</h3>
          <div className="space-y-2">
            {posts.map((post) => (
              <div key={post.id} className="p-3 bg-white rounded shadow">
                <h4 className="font-bold">{post.title}</h4>
                <p className="text-sm">{post.body.slice(0, 120)}...</p>
              </div>
            ))}
          </div>
        </section>

        <VideoPlaceholder />
        <AIChat />
      </main>

      <section className="contact-bar">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> support@crimereporting.gov.pk</p>
        <p><strong>Helpline:</strong> 051-111-345-786</p>
        <p><strong>Address:</strong> Islamabad, Pakistan</p>
      </section>
    </>
  );
}
