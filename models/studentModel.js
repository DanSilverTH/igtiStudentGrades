export default (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: {
        type: String,
        require: true,
      },
      subject: {
        type: String,
        require: true,
      },
      type: {
        type: String,
        require: true,
      },
      value: {
        type: Number,
        require: true,
        min: 0,
      },
      lastModified: {
        type: Date,
        require: true,
      },
    },
    { versionKey: false }
  );
  const student = mongoose.model('student', schema, 'student');
  return student;
};
