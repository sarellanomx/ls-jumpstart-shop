module.exports = function (migration) {
  const imageWithTags = migration
    .createContentType("imageWithTags")
    .name("image With Tags")
    .displayField("title");
  imageWithTags
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  imageWithTags
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  imageWithTags
    .createField("imageTags")
    .name("Image tags")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",
      validations: [],
    });

  imageWithTags.changeFieldControl("title", "builtin", "singleLine", {});
  imageWithTags.changeFieldControl("image", "builtin", "assetLinkEditor", {});
  imageWithTags.changeFieldControl("imageTags", "builtin", "tagEditor", {});
};
