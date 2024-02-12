import type { MetaFunction } from "@remix-run/node";
import { Drawer } from "vaul";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <Drawer.Root direction="bottom" shouldScaleBackground={false}>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content
            style={{
              position: "absolute",
              marginInline: "2rem",
              border: "2px solid gray",
              background: "lightgray",
            }}
          >
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
