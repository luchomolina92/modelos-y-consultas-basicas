const movie = (sequelize, dataTypes) => {
  let alias = 'Movie';
  let cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: dataTypes.STRING(500),
      allowNull: false
    },
    rating: {
      type: dataTypes.DECIMAL(3,1).UNSIGNED,
      allowNull: false
    },
    awards: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    length: {
      type: dataTypes.INTEGER.UNSIGNED,
      defaultValue: null
    },
    genre_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      defaultValue: null
    }
  };
  let conf = {
    tableName: 'movies',
    timestamps: true,
    underscored: true
  };

  return sequelize.define(alias, cols, conf)
}


module.exports = movie;