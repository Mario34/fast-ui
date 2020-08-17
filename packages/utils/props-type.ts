/**
 * 快速配置propType
*/

class PropsType {
  public validator?: (value: any) => boolean
  public type: any
  public default?: any

  pickType(types: any[]) {
    this.type = [...types];
    this.validator = function(value) {
      return types.some((i: any) => value instanceof i);
    };
    return this;
  }

  pick(values: string | any[]) {
    this.type = [this.boolean, this.string, this.number];
    this.validator = function(value) {
      return values.includes(value);
    };
    return this;
  }

  def(value: any) {
    this.default = value;
    return this;
  }

  val(validator: (value: any) => boolean) {
    this.validator = validator;
  }

  get any() {
    return null;
  }

  get string() {
    return String;
  }

  get number() {
    return Number;
  }

  get boolean() {
    return Boolean;
  }

  get array() {
    return Array;
  }

  get object() {
    return Object;
  }

  get date() {
    return Date;
  }

  get function() {
    return Function;
  }
}

export default PropsType;
