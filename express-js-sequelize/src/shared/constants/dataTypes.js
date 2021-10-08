export const commonDataTypes = (DataTypes) => {
  const PRIMARYUUID = {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  };
  const NOTNULLABLESTRING = {
    type: DataTypes.STRING,
    allowNull: false,
  };

  return {
    NOTNULLABLESTRING,
    PRIMARYUUID,
  };
};
