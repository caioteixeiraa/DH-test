require 'test_helper'

class WalkersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @walker = walkers(:one)
  end

  test "should get index" do
    get walkers_url, as: :json
    assert_response :success
  end

  test "should create walker" do
    assert_difference('Walker.count') do
      post walkers_url, params: { walker: { cpf: @walker.cpf, email: @walker.email, endereco: @walker.endereco, name: @walker.name, phone: @walker.phone } }, as: :json
    end

    assert_response 201
  end

  test "should show walker" do
    get walker_url(@walker), as: :json
    assert_response :success
  end

  test "should update walker" do
    patch walker_url(@walker), params: { walker: { cpf: @walker.cpf, email: @walker.email, endereco: @walker.endereco, name: @walker.name, phone: @walker.phone } }, as: :json
    assert_response 200
  end

  test "should destroy walker" do
    assert_difference('Walker.count', -1) do
      delete walker_url(@walker), as: :json
    end

    assert_response 204
  end
end
