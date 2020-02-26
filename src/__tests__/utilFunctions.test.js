import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";

import { shortText, longText, posts, users } from "./__data__/testData";

test(" shortText should not alter a string under 100 characters", () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test("shorten text should cut off more than 100 char with three periods ", () => {
  const shortened = shortenText(longText);

  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe("...");
});

test("wordCount should sum number of words in a post", () => {
  expect(wordCount(posts)).toBe(233);
});

test("attachUsername should attach username to every post", () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty("displayName");
});

test("attachUsername removes posts without a matching user", () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
});
