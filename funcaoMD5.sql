create or replace function md5 (valor varchar) return varchar2 is
  v_input varchar2(2000) := valor;
  hexkey varchar2(32) := null;
  begin
  hexkey := rawtohex(dbms_obfuscation_toolkit.md5(input => utl_raw.cast_to_raw(v_input)));
  return nvl(hexkey,'');
  end;

