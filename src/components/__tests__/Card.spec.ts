import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card", () => {
 it("renders title and description properly", () => {
  const wrapper = mount(Card, {
   props: {
    title: "Sample Title",
    desc: "This is a description",
   },
  });
  expect(wrapper.text()).toContain("Sample Title");
  expect(wrapper.text()).toContain("This is a description");
 });
});
