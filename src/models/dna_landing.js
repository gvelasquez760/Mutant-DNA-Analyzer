module.exports = function(sequelize, Sequelize) {
  //DNA model definition
  const dna_fields = ({
    dna_value: {
      type: Sequelize.JSONB,
      allowNull: false,
      primaryKey: true
    },
    mutant: Sequelize.BOOLEAN
  });
  const index = ({
    indexes: [
      {
        unique: true,
        fields: ['dna_value']
      }
    ]
  });
  const dna_landing = sequelize.define('dna_landing', dna_fields, {
    freezeTableName: true,
    timestamps: true
  }, index);
  dna_landing.removeAttribute('id');
  return dna_landing;
}
