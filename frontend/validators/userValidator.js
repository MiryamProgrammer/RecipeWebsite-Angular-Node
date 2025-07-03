const userValidator = {
  checkName: (name) => {
    if (!/^[א-ת\s]+$/i.test(name)) {
      throw new Error('invalid name');
    }
    return true;
  },

  checkPass: (password) => {
    // לא מאפשר סיסמה שמכילה רק אותיות עבריות (כולל רווחים)
    if (/^[א-ת\s]+$/i.test(password)) {
      throw new Error('invalid password');
    }
    return true;
  },

  checkAddress: (address) => {
    // מאפשר מספרים, אותיות עבריות, רווחים ופסיקים בלבד
    if (!/^[0-9א-ת\s,]+$/i.test(address)) {
      throw new Error('invalid address');
    }
    return true;
  },

  checkPhone: (phoneN) => {
    // מאפשר רק ספרות בלבד
    if (!/^[0-9]+$/.test(phoneN)) {
      throw new Error('invalid number');
    }
    if (phoneN.length > 10) {
      throw new Error('phone number is too long');
    }
    return true;
  },
};

export default userValidator;
