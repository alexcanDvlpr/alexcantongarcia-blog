/* eslint-disable @next/next/no-img-element */
import { getFileMetadataBySlug } from "@/lib/mdx";
import { ImageResponse } from "next/og";

export const alt = "Alex Cantón García Blog";
export const contentType = "image/png";
export const size = {
    width: 1200,
    height: 630,
};

export default async function Image({ params }: { params: { slug: string; locale: string; } }) {
    const post = await getFileMetadataBySlug(params.slug, params.locale);

    if (!post) return null;

    const imageContent = (
        <div style={{ width: "1200px", height: "630px", background: "#22223b", color: "white", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <img
                src={post.thumbnail}
                alt={post.title}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0
                }}
            />

            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 1
            }}></div>

            <div style={{
                position: "relative",
                zIndex: 2,
                color: "white",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "0 60px",
                boxSizing: "border-box"
            }}>
                <h1 style={{ fontSize: "4rem", fontWeight: "bolder", margin: 0 }}>
                    {post.title.toUpperCase()}
                </h1>
                <div style={{ width: "50%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10" }}>
                    <img
                        src={post.avatar}
                        alt={post.title}
                        style={{
                            width: "75px",
                            height: "75px",
                            borderRadius: "100%"
                        }}
                    />
                    <p style={{ fontSize: "2.5rem", marginTop: "1.25rem", paddingLeft: "20px" }}>
                        {post.author}
                    </p>
                </div>
            </div>
        </div>
    );

    return new ImageResponse(imageContent);
}