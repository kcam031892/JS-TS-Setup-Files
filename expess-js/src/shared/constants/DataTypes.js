export const commonDataTypes = (DataTypes) => {
  const NOTNULLABLESTRING = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  const UUID = {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  };

  return {
    NOTNULLABLESTRING,
    UUID,
  };
};
