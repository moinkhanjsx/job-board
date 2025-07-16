'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jobs', [
      {
        title: 'Frontend Developer',
        company: 'TechNova',
        location: 'Remote',
        description: 'Work on modern web apps using React and TypeScript.',
        type: 'remote',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Backend Engineer',
        company: 'DataWorks',
        location: 'New York, NY',
        description: 'Build scalable APIs and services with Node.js and PostgreSQL.',
        type: 'full-time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'UI/UX Designer',
        company: 'Creative Minds',
        location: 'San Francisco, CA',
        description: 'Design intuitive interfaces and user experiences for web and mobile.',
        type: 'part-time',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
