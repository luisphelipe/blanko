import React from "react";
import { FlexWrapper, Link, FakeLink } from "./components";
import { DEFAULT_MIN_VERSION } from "tls";

const new_link = (url, page, limit, number) => ({
  url: `${url}?page=${page}&limit=${limit}`,
  number: number,
  page,
});

// This is kinda ugly
const Pagination = ({ url, page = 1, limit = 10, count = 101 }) => {
  let links: any = [];

  if (page - 1 > 1) links.push(new_link(url, 1, limit, 1));
  if (page - 1 > 2) links.push("...");

  const last_page = Math.ceil(count / limit);
  // Add links for previous and next pages
  for (let i = Math.max(page - 1, 1); i <= Math.min(last_page, page + 1); i++) {
    links.push(new_link(url, i, limit, i));
  }

  if (page + 1 < last_page - 1) links.push("...");
  if (page + 1 < last_page)
    links.push(new_link(url, last_page, limit, last_page));

  return (
    <FlexWrapper style={{ justifyContent: "space-around" }}>
      {links.map((link, index) =>
        typeof link == "string" ? (
          <FakeLink key={index}>{link}</FakeLink>
        ) : (
          <Link
            key={link.number}
            href={link.url}
            disabled={link.page == page}
            style={
              link.page == page
                ? {
                    cursor: "default",
                    pointerEvents: "none",
                    textDecoration: "none",
                    color: "inherit",
                  }
                : {}
            }
          >
            {link.number}
          </Link>
        )
      )}
    </FlexWrapper>
  );
};

export default Pagination;
