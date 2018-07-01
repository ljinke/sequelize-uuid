module.exports = DataTypes => {
  // Extends IP Data Type
  function IPTYPE() {
    if (!(this instanceof IPTYPE)) return new IPTYPE();
  }
  util.inherits(IPTYPE, DataTypes.ABSTRACT);

  IPTYPE.prototype.key = IPTYPE.key = "IPTYPE";
  IPTYPE.prototype.toSql = function toSql() {
    return "VARBINARY(16)";
  };

  IPTYPE.prototype._sanitize = function _sanitize(value, options) {
    options.raw = false;
    if (
      (!options || (options && !options.raw)) &&
      !(value instanceof IP) &&
      !!value
    ) {
      return new IP(value);
    }

    return value;
  };

  IPTYPE.prototype._isChanged = function _isChanged(value, originalValue) {
    if (
      originalValue &&
      !!value &&
      (value === originalValue ||
        (value instanceof IP &&
          originalValue instanceof IP &&
          value.toBuffer().equals(originalValue.toBuffer())))
    ) {
      return false;
    }

    // not changed when set to same empty value
    if (!originalValue && !value && originalValue === value) {
      return false;
    }

    return true;
  };

  IPTYPE.prototype._stringify = function _stringify(ip, options) {
    return ip.toBuffer();
  };

  DataTypes.IP = IPTYPE;
};
