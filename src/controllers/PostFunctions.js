const {PostTravel} = require('../models/PostTravel');
const mongoose = require("mongoose");
// Model.find({}) returns all documents in a collection.
async function getAllPosts(){
    return await PostTravel.find({}).exec();
}

async function getPostById(postID){
    return await PostTravel.findById(postID).exec();
}

async function getPostsByAuthor(userID){
    const authorObjectId = mongoose.Types.ObjectId(userID)
    return await PostTravel.find({ author: authorObjectId }).populate('author').exec();

}

async function createPost(postDetails){
    return await PostTravel.create(postDetails);
}

async function updatePost(postDetails){
    // Find user, update it, return the updated user data.
    return await PostTravel.findByIdAndUpdate(postDetails.postID, postDetails.updatedData, {returnDocument: 'after'}).exec();

}

async function deletePost(postID){
    return await PostTravel.findByIdAndDelete(postID).exec();

}

module.exports = {
    getAllPosts, getPostById, getPostsByAuthor, createPost, updatePost, deletePost
}