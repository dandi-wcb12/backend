const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();

module.exports = async (request, h) => {
    const user = request.payload;
   
    // Input validation
    if (!user.name || !user.email) {
       throw Boom.badRequest('Missing required fields');
    }
   
    const ref = await firestore.collection('users').add(user);
    return { id: ref.id, ...user };
   };