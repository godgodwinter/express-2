// const db = require("../models");

// const Post = db.posts;
import TodoService from "../services/PostService";

exports.findAll = (req, res) => {
  res.status(200).send({
    success: true,
    data: [],
    message: "This is Post",
  });
  //   [
  //     'success'    => true,
  //     'data'    => $items,
  // ]
  // Post.find()
  //   .then((result) => {
  //     res.send(result);
  //   }).catch((err) => {
  //     res.status(500).send({
  //       message: err.message || 'Some error while retrieving posts',
  //     });
  //   });
};

// exports.create = (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     body: req.body.body,
//     published: req.body.published ? req.body.published : false,
//   });
//   post
//     .save(post)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.status(409).send({
//         message: err.message || "Some error while creating post",
//       });
//     });
// };

// exports.findOne = (req, res) => {
//   const { id } = req.params;
//   Post.findById(id)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error while show post",
//       });
//     });
// };

// exports.update = (req, res) => {
//   const { id } = req.params;
//   Post.findByIdAndUpdate(id, req.body)
//     .then((result) => {
//       if (!result) {
//         res.status(404).send({
//           message: `Post not found with id ${id}`,
//         });
//       } else {
//         res.send({
//           message: "Post updated successfully",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(409).send({
//         message: err.message || "Some error while show post",
//       });
//     });
// };

// exports.delete = (req, res) => {
//   const { id } = req.params;
//   Post.findByIdAndRemove(id)
//     .then((result) => {
//       if (!result) {
//         res.status(404).send({
//           message: `Post not found with id ${id}`,
//         });
//       } else {
//         res.send({
//           message: "Post deleted successfully ",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(409).send({
//         message: err.message || "Some error while deleting post",
//       });
//     });
// };
