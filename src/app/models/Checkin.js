import Sequelize, { Model } from 'sequelize';

class Checkin extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
      },
      { sequelize, modelName: 'checkins' }
    );

    return this;
  }
}

export default Checkin;
