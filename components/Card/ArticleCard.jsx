import React from 'react'

const ArticleCard = () => {
  return (
    <div class="">
    <div className="w-full shadow bg-white rounded">
      <a href="#!">
        <img
          class="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </a>
      <div class="p-6">
        <span className="text-12px font-normal text-secondryColor capitalize">
          7 Sep 2020
        </span>
        <h3 className="font-bold text-secondryColor text-10px mb-4">
          {" "}
          Do you really understand the concept of product value?
        </h3>
        <p className="text-secondryColor text-11px font-normal">
          Society is fragmenting into two parallel realities. In one
          reality, you have infinite upside and
        </p>
        <span className="text-12px font-normal text-secondryColor capitalize">
          Read More
        </span>
      </div>
    </div>
  </div>
  )
}

export default ArticleCard