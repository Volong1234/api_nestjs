import { Schema, Document } from 'mongoose';

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    content: String,
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: 'posts',
  },
);

export { PostSchema };

export interface Post extends Document {
    title: String,
    description: String,
    content: String,
}