const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  const contact = {
    name: req.body.name,
    bio: req.body.bio,
    brand: req.body.brand,
    social_media: {
      Facebook: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Instagram: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Twitter: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      LinkedIn: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Youtube: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Pinterest: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Snapchat: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Tiktok: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Reddit: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      WhatsApp: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      }
    }
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    name: req.body.name,
    bio: req.body.bio,
    brand: req.body.brand,
    social_media: {
      Facebook: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Instagram: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Twitter: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      LinkedIn: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Youtube: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Pinterest: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Snapchat: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Tiktok: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      Reddit: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      },
      WhatsApp: {
        user_handle: req.body.user_handle,
        link_title: req.body.link_title,
        website: req.body.website,
        url: req.body.url
      }
    }
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};
