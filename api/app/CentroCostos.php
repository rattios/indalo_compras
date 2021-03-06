<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CentroCostos extends Model
{
	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'centro_costos';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    //protected $primaryKey = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'codigo', 'descripcion', 'habilitado', 'desde', 'hasta'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    public function contratos()
    {
        // 1 categoria puede tener varios productos
        return $this->hasMany('App\Contratos', 'centro_costos_id');
    }

}
