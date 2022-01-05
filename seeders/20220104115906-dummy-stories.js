"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Story 1",
          content: "Content testuser",
          spaceId: 1,
          imageUrl:
            "https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Story 2",
          content: "Content dummyuser",
          imageUrl:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eye-image.nl%2F&psig=AOvVaw1jMJ1jcaVkJgx4tOM56OBt&ust=1641384171697000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDhndaGmPUCFQAAAAAdAAAAABAP",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Story 3",
          content: "Content testuser",
          spaceId: 1,
          imageUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Finteractive-examples.mdn.mozilla.net%2Fmedia%2Fcc0-images%2Fgrapefruit-slice-332-332.jpg&imgrefurl=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fimg&tbnid=A4G7eW2zetaunM&vet=12ahUKEwiGqZzVhpj1AhVKg6QKHeSXBiYQMygEegUIARCxAQ..i&docid=l3NoP295SYrYvM&w=332&h=332&q=image&ved=2ahUKEwiGqZzVhpj1AhVKg6QKHeSXBiYQMygEegUIARCxAQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Story 4",
          content: "Content dummyuser",
          imageUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.industrialempathy.com%2Fimg%2Fremote%2FZiClJf-1920w.jpg&imgrefurl=https%3A%2F%2Fwww.industrialempathy.com%2Fposts%2Fimage-optimizations%2F&tbnid=z4_uU0QB2pe-SM&vet=12ahUKEwiGqZzVhpj1AhVKg6QKHeSXBiYQMygGegUIARC1AQ..i&docid=7SySw5zvOgPYAM&w=1920&h=1080&q=image&ved=2ahUKEwiGqZzVhpj1AhVKg6QKHeSXBiYQMygGegUIARC1AQ",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
