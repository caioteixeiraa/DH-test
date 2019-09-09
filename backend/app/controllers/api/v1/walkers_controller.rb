class Api::V1::WalkersController < ApplicationController
  before_action :set_walker, only: [:show, :update, :destroy]

  # GET /walkers
  def index
    @walkers = Walker.all

    render json: @walkers
  end

  # GET /walkers/1
  def show
    render json: @walker
  end

  # POST /walkers
  def create
    @walker = Walker.new(walker_params)

    if @walker.save
      render json: @walker, status: :created, location: api_v1_walker_url(@walker)
    else
      render json: @walker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /walkers/1
  def update
    if @walker.update(walker_params)
      render json: @walker
    else
      render json: @walker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /walkers/1
  def destroy
    @walker.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_walker
      @walker = Walker.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def walker_params
      params.require(:walker).permit(:name, :cpf, :email, :phone, :endereco)
    end
end
