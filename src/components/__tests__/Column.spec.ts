import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Column from "@/components/Column.vue";

describe("Column", () => {
 it("renders title properly", () => {
  const wrapper = mount(Column, {
   props: {
    title: "Sample Title"
   },
  });
  expect(wrapper.text()).toContain("Sample Title");
 });
});
