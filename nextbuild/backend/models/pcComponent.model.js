module.exports = (sequelize, Sequelize) => {
  const PcComponent = sequelize.define("PcComponents", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ComponentName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    typeId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
    },
    ram_capacity: {
      type: Sequelize.STRING,
    },
    storage_capacity: {
      type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.STRING,
      },
  });

  return PcComponent;
};
